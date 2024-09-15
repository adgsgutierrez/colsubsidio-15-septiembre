import { jobList } from "./jobList.js";
import { jobUpdate } from "./jobUpdate.js";
import { validateNotification } from "./notification.js";

export function sendNextStatus(id, newStatus) {
    jobUpdate(id,newStatus);
};

(function() {
    jobList();
    validateNotification();
    window.sendNextStatus = sendNextStatus;
})();