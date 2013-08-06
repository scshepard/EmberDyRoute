App.Marker = DS.Model.extend({
		DateValidated: DS.attr('string'),
		Name: DS.attr('string'),
		Region: DS.attr('string'),
		Location: DS.attr('string'),
		Characteristic: DS.attr('string'),
		Height: DS.attr('string'),
		Range: DS.attr('string'),
		Structure: DS.attr('string'),
		Color: DS.attr('string'),
		Remarks: DS.attr('sring'),
		PublicMarker: DS.attr('boolean'),
		ChartName: DS.attr('string'),
		Services: DS.attr('string'),
		YRANumber: DS.attr('string'),
		isCompleted: DS.attr('boolean')
});

App.Marker.FIXTURES = [
{
	DateValidated: "10-June-2013",
	id: 1,
	Name: "Cal Sailing",
	Region: "Berkeley",
	Characteristic: "Public Dock",
	Height: "",
	Range: "",
	Structure: "n/a",
	Color: "",
	Remarks: "",
	PublicMarker: "no",
	ChartName: "",
	Services: "yes",
	YRANumber: ""
},
{
	DateValidated: "",
	id: '2.1',
	Name: "Point Richmond",
	Region: "Richmond",
	Characteristic: "Public Dock",
	Height: "",
	Range: "",
	Structure: "n/a",
	Color: "",
	Remarks: "",
	PublicMarker: "no",
	ChartName: "",
	Services: "yes",
	YRANumber: ""
},
{
	DateValidated: "",
	id: 3,
	Name: "X-Bouy",
	Region: "Olympic Circle",
	Characteristic: "Public Dock",
	Height: "",
	Range: "",
	Structure: "n/a",
	Color: "",
	Remarks: "",
	PublicMarker: "no",
	ChartName: "",
	Services: "yes",
	YRANumber: ""
}
]
