"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Status = void 0;
exports.wrapInArray = wrapInArray;
exports.greet = greet;
exports.add = add;
exports.describeUser = describeUser;
exports.getStatusMessage = getStatusMessage;
// --- Generic function ---
function wrapInArray(value) {
    return [value];
}
// --- Functions with typed params & return ---
function greet(name) {
    return `Hello, ${name}! Welcome to the TypeScript server.`;
}
function add(a, b) {
    return a + b;
}
function describeUser(user) {
    const emailPart = user.email ? ` (${user.email})` : '';
    return `${user.name} is ${user.age} years old${emailPart}`;
}
// --- Enum ---
var Status;
(function (Status) {
    Status["Active"] = "ACTIVE";
    Status["Inactive"] = "INACTIVE";
    Status["Pending"] = "PENDING";
})(Status || (exports.Status = Status = {}));
function getStatusMessage(status) {
    return {
        status,
        message: `Current status is: ${status}`,
    };
}
// --- Quick self-test (runs when imported or executed directly) ---
if (require.main === module) {
    console.log(greet('World'));
    console.log('2 + 3 =', add(2, 3));
    console.log(describeUser({ name: 'Bob', age: 25 }));
    console.log(wrapInArray(42));
    console.log(getStatusMessage(Status.Active));
}
//# sourceMappingURL=utils.js.map