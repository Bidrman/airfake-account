import React from 'react'

const Wallet = ({ width, height, fill }) => {
    return (
        <div className={'mb-4 invest__icon'}>
            <svg
                viewBox='0 0 60 60'
                fill={fill}
                width={width}
                height={height}
                data-element-id='icons/Icon/default'
            >
                <path
                    d='M9.46 9.75l34.544-8.586a5.492 5.492 0 0 1 4.448.8 5.477 5.477 0 0 1 2.356 3.86l.506 3.98c4.877.532 8.686 4.682 8.686 9.7v30.5c0 5.362-4.374 9.74-9.75 9.74H9.75c-5.376 0-9.75-4.378-9.75-9.74v-30.5c0-5.28 4.217-9.599 9.46-9.754zm8.366-.004h31.466l-.468-3.682a3.53 3.53 0 0 0-1.502-2.458 3.548 3.548 0 0 0-2.834-.502L17.826 9.746zM58 25.744v-6.24c0-4.28-3.476-7.76-7.75-7.76H9.75c-4.274 0-7.75 3.48-7.75 7.76v30.5c0 4.262 3.476 7.742 7.75 7.742h40.5c4.274 0 7.75-3.48 7.75-7.742v-2.26h-7.574c-6.066 0-11-4.94-11-10.998 0-6.062 4.934-11.002 11-11.002H58zm0 2.002h-7.574c-4.964 0-9 4.04-9 9s4.036 9 9 9H58v-18zm-8.824 11.498a3.51 3.51 0 0 1-3.5-3.5c0-1.92 1.57-3.498 3.5-3.498s3.5 1.578 3.5 3.498c0 1.92-1.57 3.5-3.5 3.5zm0-5c-.828 0-1.5.68-1.5 1.5s.672 1.5 1.5 1.5c.826 0 1.5-.68 1.5-1.5s-.674-1.5-1.5-1.5zM6 17.744h4v2H6v-2zm6 0h6v2h-6v-2zm8 0h6v2h-6v-2zm8 0h6v2h-6v-2zm8 0h6v2h-6v-2zm8 0h6v2h-6v-2zm8 0h4v2h-4v-2zm-46 32h4v2H6v-2zm6 0h6v2h-6v-2zm8 0h6v2h-6v-2zm8 0h6v2h-6v-2zm8 0h6v2h-6v-2zm8 0h6v2h-6v-2zm8 0h4v2h-4v-2z'
                    id='Wallet_svg__a'
                ></path>
            </svg>
        </div>
    )
}

export default Wallet
