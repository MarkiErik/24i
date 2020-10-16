import React from 'react'
import logo from '../../assets/logo.svg'
import styles from './Loader.module.scss'

export const Loader = () => (
	<img src={logo} className={styles.loader} alt="logo" />
)
