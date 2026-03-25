import xapi from 'xapi';

function shutdown(){
  xapi.command.SystemUnit.Boot({action: 'Shutdown'});
}

xapi.event.on('UserInterface Extensions Widget Action', (event) => {
  if (event.WidgetId === 'button_shutdown_yes'){
    shutdown();
  }else if (event.WidgetId === 'button_shutdown_no'){
    xapi.Command.UserInterface.Extensions.Panel.Close();
  }
});