App.Record = DS.Model.extend({
		Name: DS.attr('string'),
});

App.Record.FIXTURES = [
{
	id: '1',
	Name: "Record Aa"
},
{
	id: '2',
	Name: "Record Bb"
},
{
	id: '3',
	Name: "Record Cc"
}
]
