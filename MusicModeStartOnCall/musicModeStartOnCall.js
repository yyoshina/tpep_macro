import xapi from 'xapi';

function listenToCalls(){
  xapi.event.CallSuccessful.on(async() => {
    xapi.Command.Audio.Microphone.MusicMode.Start();
  });
}

listenToCalls();