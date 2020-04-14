---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
title: Jekyll Calendar
---

{% include calendar.html %}
{% include calendar_categories.html %}

<script src="{{site.baseurl}}/js/calendarbase.esm.js"></script>
<script src="{{site.baseurl}}/js/calendar-entries.js"></script>
<script defer src="{{site.baseurl}}/js/calendar-shell.js"></script>
<script defer src="{{site.baseurl}}/js/calendar-init.js"></script>
