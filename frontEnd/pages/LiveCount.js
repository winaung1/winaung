import React from 'react'
import { useEffect, useState } from 'react'
import {addDoc, collection, doc, FieldValue, getDoc, getDocs, updateDoc} from 'firebase/firestore';
import { db } from '@/firebase';
import socketIO from 'socket.io-client';


const socket = socketIO.connect('http://localhost:3001');

function LiveCount() {
    const [liveCounts, setLiveCounts] = useState([])
    const [count, setCount] = useState(0)
    const [messages, setMessages] = useState('')
    const [show, setShow] = useState(true)
    const colRef = collection(db, 'livecount')

    const handleClick = () => {
        setCount(count + 1)
        // setShow(!show)
        const data = {
            count: count,
        };
        const theId = doc(db, 'livecount', 'YS2t0z9rQibZWU2hVwOj')
        
        updateDoc(theId, data)
        .then(colRef => {
            console.log('updated');
        })
        .catch(error => {
            console.log(error);
        })

        
        // location.reload()
    }
    socket.emit('messageFromClient', {
        message: liveCounts.count
    })


    useEffect(() => {
        const getLiveCount = async () => {
            const cityRef = colRef;
            const doc = await getDocs(cityRef);
         
                doc.forEach(doc => {
                    setLiveCounts(doc.data());
                })
            
        }
        getLiveCount()

        socket.on('messageFromServer', (data) => setMessages(data));
    }, [])
  return (
    <div className='relative bg-white text-black h-screen'>
        {show && 
        <div className='absolute inset-0 bg-black/20 w-full h-screen text-center'>
            <div className='bg-blue-700 h-80 w-1/2 mx-auto'>
                <p onClick={handleClick}>Close</p>
            </div>
        </div>
    }
        {/* {liveCounts?.count?.map((liveCount => ( */}
            <>
            <p>{messages.message}</p>
            <h1 >This site has been visited <span id="visits">{liveCounts.count}</span> times.</h1>
            </>
        {/* )))} */}
    </div>
  )
}

export default LiveCount