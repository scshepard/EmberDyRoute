App.Book = DS.Model.extend({
		Name: DS.attr('string'),
});

App.Book.FIXTURES = [
{
	id: '1',
	Name: "Book Aa"
},
{
	id: '2',
	Name: "Book Bb"
},
{
	id: '3',
	Name: "Book Cc"
}
]
