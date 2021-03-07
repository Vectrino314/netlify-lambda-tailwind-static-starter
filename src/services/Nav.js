import '@ryangjchandler/spruce';
import 'alpinejs';

window.Spruce.store('nav', {
    open: false,
    // mobileOpen: false,
    toggle() {
        console.log("TOGGLING")
        return this.open = !this.open;
    },
    // toggleMobile() {
    //     return this.mobileOpen = !this.mobileOpen;
    // },
    set false(condition) {
        return {
            open: condition,
            // mobileOpen: condition,
        }
    }
});