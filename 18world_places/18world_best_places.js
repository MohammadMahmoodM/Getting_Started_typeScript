var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var best_places = ['new yok', 'Uk', 'Pk', 'China'];
console.log(best_places);
// we want to show in  alphabetical order without modifying the actual list.
var making_copy_for_sort = best_places.slice();
// here i used .slice() to copy we can get copy by making_copy_for_sort = [...best_place]
// var copiedArray = best_places.concat();
var alphabetical_arranged = making_copy_for_sort.sort();
console.log(alphabetical_arranged);
// array in original form
console.log(best_places);
// Print your array in reverse alphabetical order without changing the order of the original list.
var making_copy_for_reverse_order = __spreadArray([], best_places, true);
var reverse_sorted = making_copy_for_reverse_order.sort(function (a, b) { return b.localeCompare(a); });
console.log(reverse_sorted);
// check original array is still in same order
console.log("check original array is still in same order", best_places);
