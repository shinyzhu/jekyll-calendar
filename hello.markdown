---
layout: none
---
BEGIN:VCALENDAR

VERSION:2.0

PRODID:-//DevRelOps Club//Developer Events Calendar//EN

CALSCALE:GREGORIAN

METHOD:PUBLISH

X-WR-CALNAME:Developer Events

X-WR-TIMEZONE:Asia/Shanghai

X-WR-CALDESC:This is a public calenar to hold developer events in China by devrelops.club
<hr />

{% for activity in site.data.calendar.activities %}
{% assign entry = activity[1] %}

BEGIN:VEVENT

UID:event-{{activity[0]}}/{{ entry.date }}

SUMMARY:{{ entry.name }}

CATEGORIES:{% for category in site.data.calendar.categories %}{% if category.id == entry.category %}{{ category.name }}{% endif %}{% endfor %}

DESCRIPTION:{{ entry.description | strip | replace: "[^\r]\n", "\r\n" }}

URL:{{ entry.url }}

LOCATION:{{ entry.location }}

DTSTART;VALUE=DATE:{{ site.time | date: '%Y' }}{{ entry.date | date: "%m%d"}}

DTEND;VALUE=DATE:{{ site.time | date: '%Y' }}{{ entry.date_end | date: "%m%d"}}


{% if entry.singular == false %}
RRULE:FREQ=YEARLY;BYMONTH={{ entry.date | date: "%-m"}};BYMONTHDAY={{ entry.date | date: "%-d"}}
{% endif %}

END:VEVENT
<hr />
{% endfor %}

END:VCALENDAR
