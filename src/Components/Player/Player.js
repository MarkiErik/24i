import React, { useEffect, useImperativeHandle } from 'react'

import shaka from 'shaka-player/dist/shaka-player.ui'
import '../../assets/player/controls.css'

export const ShakaPlayer = () => {
	const uiContainerRef = React.useRef(null)
	const videoRef = React.useRef(null)
	const controller = React.useRef({})

	const config = { preferredAudioLanguage: 'en-CA' }
	const manifestUri =
		'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'

	useEffect(() => {
		const player = new shaka.Player(videoRef.current)
		const ui = new shaka.ui.Overlay(
			player,
			uiContainerRef.current,
			videoRef.current
		)

		// Store Shaka's API in order to expose it as a handle.
		controller.current = {
			player,
			ui,
			videoElement: videoRef.current,
		}
		return () => {
			player.destroy()
			ui.destroy()
		}
	}, [])

	// Keep shaka.Player.configure in sync.
	React.useEffect(() => {
		const { player } = controller.current
		if (player) {
			player.configure(config)
		}
	}, [config])

	// Load the source url when we have one.
	React.useEffect(() => {
		const { player, videoElement } = controller.current
		if (player) {
			player.load(manifestUri)
			videoElement.requestFullscreen()
		}
	}, [manifestUri])

	useImperativeHandle(videoRef.current, () => ({
		get player() {
			return controller.current.player
		},
		get ui() {
			return controller.current.ui
		},
		get videoElement() {
			return controller.current.videoElement
		},
	}))

	return (
		<>
			{videoRef && (
				<div className={'Player'}>
					<div ref={uiContainerRef}>
						<video
							id="video"
							fullscreen={'true'}
							width={'100%'}
							poster="//shaka-player-demo.appspot.com/assets/poster.jpg"
							autoPlay
							ref={videoRef}
						></video>
					</div>
				</div>
			)}
		</>
	)
}
