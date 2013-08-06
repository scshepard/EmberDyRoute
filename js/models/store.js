/*
	Module: Modeling your data
	Create new class Store
	Store tracks local instances of Markers
*/

App.Store = DS.Store.extend({
		revision: 12,
		adapter: 'DS.FixtureAdapter'
});
