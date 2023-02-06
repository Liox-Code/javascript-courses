// function AutoPlay() {}
// AutoPlay.prototype.run = function (player) {
//     player.mute()
//     player.play()
// }

// class AutoPause{
//     constructor(){
//         this.threshold = 0.25
//         this.handleIntersection = this.handleIntersection.bind(this)
//         this.handleVisibilityChange = this.handleVisibilityChange.bind(this)
//     }
//     run(player){
//         this.player = player

//         const observer = new IntersectionObserver(this.handleIntersection,{
//             threshold:this.threshold,
//         })

//         observer.observe(this.player.media)
//         document.addEventListener("visibilitychange", this.handleVisibilityChange)
//     }

//     handleIntersection(entries){
//         const entry = entries[0]
//         const isVisible = (entry.intersectionRatio >= this.threshold)
//         if(isVisible){
//             this.player.play()
//         } else {
//             this.player.pause()
//         }
//     }

//     handleVisibilityChange(){
//         const isVisible = document.visibilityState == "visible"
//         if(isVisible){
//             this.player.play()
//         } else {
//             this.player.pause()
//         }
//     }
// }

// function mediaPlayer(config){
//     this.media = config.el
//     this.plugins = config.plugin || []

//     this._initPlugin()
// }

// mediaPlayer.prototype._initPlugin = function () {
//     this.plugins.forEach(plugin => {
//         plugin.run(this)
//     });
// }

// mediaPlayer.prototype.play = function(){
//     this.media.play()
// }

// mediaPlayer.prototype.pause = function(){
//     this.media.pause()
// }

// mediaPlayer.prototype.mute = function(){
//     this.media.muted = true
// }

// mediaPlayer.prototype.unmute = function(){
//     this.media.muted = false
// }

// mediaPlayer.prototype.tooglePlay = function(){
//     if (this.media.paused) {
//         this.play()
//     } else {
//         this.pause()
//     }
// }

// const video = document.querySelector('video')
// const player = new mediaPlayer({ el: video, plugin: [new AutoPlay(), new AutoPause()] })

// const button = document.querySelector('button')
// button.onclick = () => player.tooglePlay()


// //SERVICE WORKER

// if('serviceWorker' in navigator){
//     navigator.serviceWorker.register('/sw.js').catch(error => {
//         console.log(error.message)
//     })
// }