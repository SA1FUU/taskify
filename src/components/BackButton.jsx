import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function BackButton() {

    const navigate = useNavigate()

    return (
        <button className='back' onClick={() => navigate('/')}>
            <span class="span-mother">
                <span>🢀</span>
                <span>B</span>
                <span>a</span>
                <span>c</span>
                <span>k</span>
            </span>
            <span class="span-mother2">
                <span>🢀</span>
                <span>B</span>
                <span>a</span>
                <span>c</span>
                <span>k</span>
            </span>
        </button>


    )
}
