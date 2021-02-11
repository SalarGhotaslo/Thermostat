### Thermostat

```
As a user
To have control of my temperature
I would like my thermostat to start at 20 degrees
```
```
As a user
To make my room warmer
I would like to increase my temperature on the thermostat
```
```
As a user
To make my room colder
I would like to decrease my temperature on the thermostat
```

```
As a user
So I won't freeze to death
I don't want my temperature to go lower than 10 degrees. EVER.
```
```
As a user
Because I love my planet
I want to turn power saving mode on and have 25 degrees as the maximum
```
As a user
Because I hate my planet
I want to turn power saving mode off and have 32 degrees as the maximum
```
As a user
Because I love my planet
I want my power saving mode to be on by default
```
```
As a user
Because I am lazy
I want to reset my temperature to 20 degrees
```
You can reset the temperature to 20 with a reset function
You can ask about the thermostat's current energy usage: < 18 is low-usage, <= 25 is medium-usage, anything else is high-usage.
(In the challenges where we add an interface, low-usage will be indicated with green, medium-usage indicated with black, high-usage indicated with red.)

## HTML UI Plan
title = thermostat
body
h1 currentTemperature
button up ? text box
button down ? text box
button powerSavingModeOn
button powerSavingModeOff
button reset
button energyUsage
body
script
