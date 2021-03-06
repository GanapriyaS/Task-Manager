/* The function should return the names of those entries whose date is the current date. The names should be separated by a comma.

For example, here's an array of three entries and assume the date now is 2021-01-21.

[{ name: "Johny" , date: "2021-01-21T02:53:42+05:30" }, { name: "Sugar" , date: "2021-01-22T02:53:42+05:30" }, { name: "Sun" , date: "2021-01-21T03:53:42+05:30" }]

The function should return: ``` Johny,Sun ```. Please note that the names are separated by a comma without space.
*/

function todaysEntries(entries) {
  let filter = entries.filter(
    (item) =>
      item.date.substring(0, 10) === new Date().toISOString().substring(0, 10)
  );
  let map = filter.map((item) => item.name);
  return map.join(",");
}

module.exports = todaysEntries;
