/* Reminder Modal */
const reminder = document.getElementById('Reminder');

if (reminder) {
  const reminderToggler = document.querySelector('[data-reminder-toggler]');
  const reminderDismiss = document.querySelector('[data-reminder-dismiss]');
  const eventID = reminderToggler.getAttribute("data-event-id");

  if (!localStorage.getItem('reminderClicked') || (localStorage.getItem('reminderClicked') && localStorage.getItem('reminderClicked') != eventID)) {

    reminderToggler.addEventListener('click', () => {
      localStorage.setItem('reminderClicked', eventID);
      window.location.assign(reminderToggler.getAttribute("data-event-url"));
    });

    if (reminderDismiss) {
      reminderDismiss.addEventListener('click', () => {
        reminder.remove();
        localStorage.setItem('reminderClicked', eventID);
      });
    }

    reminder.classList.remove('hidden');
  }
}
