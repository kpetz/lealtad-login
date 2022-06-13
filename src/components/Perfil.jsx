import React from 'react'

const Perfil = ({ user }) => {
	return (
			<img className='border-radius border-secondary'  src={user.avatar} alt='Profile' width='5%'/>
	)
}

export default Perfil