import "@ryangjchandler/spruce";
import "alpinejs";


window.Spruce.store("reserveSrv", {
  started: false,
  steps: [
    {
      title: 'Creating 1',
      finished: false,
      visiting: true,
    },
    {
      title: 'Creating 2',
      finished: false,
      visiting: false,
    },
    {
      title: 'Creating 3',
      finished: false,
      visiting: false,
    },
    {
      title: 'Creating 4',
      finished: false,
      visiting: false,
    },
    {
      title: 'Creating 5',
      finished: false,
      visiting: false,
    },
  ],
  config: {},
  // mobileOpen: false,
  prev() {
    console.log("TOGGLING");
    return this.step - 1;
  },
  next() {
    console.log("TOGGLING");
    return this.step + 1;
  },
  getStarted() {
    return (this.started = true);
  }
});
