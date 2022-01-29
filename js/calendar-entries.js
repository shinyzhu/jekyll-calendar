---
---

let calendar_categories = {
	{% for category in site.data.calendar.categories %}
	{{ category.id }}: {
		"name":  "{{ category.name }}",
		"color": "{{ category.color }}",
		"active": true
	},
	{% endfor %}
};

let calendar_entries = {
	{% for month in site.data.calendar.months_zh %}
	"{{month.id}}": [
		{% for activity in site.data.calendar.activities %}{% assign entry = activity[1] %}
			{% assign entry_month = entry.date | date: "%m" | plus: 0 %}
			{% if entry_month == month.id %}
				{
					"id": "event-{{ activity[0] }}",
					"name": "{{ entry.name }}",
					"description": "{{ entry.description }}",
					"url": "{{ entry.url }}",
					"location": "{{ entry.location }}",
					"category": "{{ entry.category }}",
					"date": "{{ entry.date }}",
					"date_start": "{{ entry.date_start }}",
					"date_end": "{{ entry.date_end }}"
				},
			{% endif %}
	{% endfor %}],
	{% endfor %}
};

let calendar_weekdays = [
	{% for weekday in site.data.calendar.weekdays_zh %}
	{
		"name": "{{weekday.name}}",
			"abbreviation": "{{weekday.abbreviation}}",
	},
	{% endfor %}
];
let calendar_monthnames = [
	{% for month in site.data.calendar.months_zh %}
	{
		"name": "{{month.name}}",
		"abbreviation": "{{month.abbreviation}}",
	},
	{% endfor %}
];
