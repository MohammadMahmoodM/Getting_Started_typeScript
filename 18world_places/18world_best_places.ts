var best_places: string[] = ['new yok', 'Uk', 'Pk', 'China']

console.log(best_places);

// we want to show in  alphabetical order without modifying the actual list.

var making_copy_for_sort: string[] = best_places.slice()
// here i used .slice() to copy we can get copy by making_copy_for_sort = [...best_place]
// var copiedArray = best_places.concat();

var alphabetical_arranged: string[] = making_copy_for_sort.sort()

console.log("check alphabetlically arranged order", alphabetical_arranged);


// array in original form

console.log("check original still in same order", best_places);

// Print your array in reverse alphabetical order without changing the order of the original list.

var making_copy_for_reverse_order: string[] = [...best_places]

var reverse_sorted: string[] = making_copy_for_reverse_order.sort((a,b)=> b.localeCompare(a))

console.log("check reverse order", reverse_sorted);

// check original array is still in same order

console.log("check original array is still in same order", best_places);
