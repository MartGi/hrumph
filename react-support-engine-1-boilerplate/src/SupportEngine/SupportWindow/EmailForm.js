import React, { useState } from 'react'

import { styles } from '../styles'

import { LoadingOutlined } from '@ant-design/icons'

import Setupscreen from '../Setupscreen'

import axios from 'axios'

const EmailForm = props => {
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)

    function getOrCreateUser(callback){
        axios.put(
            'https://api.chatengine.io/users/',
            {
                "username": email,
                "secret": email,
                "email": email,
            },
            {headers: {"Private-Key": process.env.REACT_APP_CE_PRIVATE_KEY}}
        )
        .then(r => callback(r.data))
    }

    function getOrCreateChat(callback){
        axios.put(
        'https://api.chatengine.io/chats/',
            {
                "usernames": ["admin", email],
                "is_direct_chat": true
            },
            {headers: {"Private-Key": process.env.REACT_APP_CE_PRIVATE_KEY}}
        )
        .then(r => callback(r.data))
    }

    function handleSubmit(event) {
        event.preventDefault();
        setLoading(true)
        console.log('Sending email', email)

        getOrCreateUser(
            user => {
                props.setUser(user)
                getOrCreateChat(
                    chat => props.setChat(chat)
                )
            }
        )
    }

    return (
        <div
            style={{
                ...styles.emailFormWindow,
                ...{
                    height: props.visible ? '100%' : '0%',
                    opacity: props.visible ? '1' : '0',
                }
            }}
        >
            <div style={{ height:'0px', zIndex: '1' }}>
                <div style={styles.stripe} />
            </div>

            <div
                className='transition-5'
                style={{
                    ...styles.loadingDiv,
                    ...{
                        zIndex: loading ? '10' : '-1',
                        opacity: loading ? '0,33' : '0',
                    }
                }}
            />
            <LoadingOutlined
                className='transition-5'
                style={{
                    ...styles.loadingIcon,
                    ...{
                        zIndex: loading ? '10' : '-1',
                        opacity: loading ? '1' : '0',
                        fontSize: '82px',
                        top: 'calc(50% - 41px',
                        left: 'calc(50% - 41px',
                    }
                }}
            />

            <div style={{ position: 'absolute', height: '100%', width: '100vw', textAlign: 'center' }}>
                <Setupscreen
                    style={{
                        position: 'relative',
                        left: 'calc(50% - 44px)',
                        top: '10%',
                        zIndex: '1',
                    }}
                />

                <div style={styles.topText}>
                    Where am i?
                </div>

                <form
                    onSubmit={e => handleSubmit(e)}
                    style={{ position: 'relative', width: '100%', top: '30%', zIndex: '10' }}
                >
                    <input
                        style={styles.emailInput}
                        onChange={e => setEmail(e.target.value)}
                        placeholder='location..'
                    />
                </form>

                <div style={styles.bottomText}>
                    Enter the location <br/> of this screen
                </div>
            </div>
        </div>
    )
}

export default EmailForm