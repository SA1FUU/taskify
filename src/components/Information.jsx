import React from 'react'
import SocialIcons from './SocialIcons'
import { useTodo } from '../context/TodoProvider'

export default function Information() {

    const { setSocialShow } = useTodo()

    return (
        <div className='information'>

            <span className='closeSocial' onClick={() => setSocialShow(false)}>✖</span>

            <div className="socailIcons">
                <SocialIcons />
            </div>

            <hr />

            <a className='code' target='_blank' href='https://github.com/SA1FUU/taskify'>
                <button class="cssbuttons-io">
                    <span>
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0h24v24H0z" fill="none"></path>
                            <path
                                d="M24 12l-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414L24 12zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757 2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z"
                                fill="currentColor">

                            </path>
                        </svg>
                        Source Code</span>
                </button>
            </a>

        </div>
    )
}
