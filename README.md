# RF Bootstrap3
[rf-form](https://github.com/ShakingMap/rf-form) components suit for bootstrap3.

This docs list the components of this suit. refer to [rf-form](https://github.com/ShakingMap/rf-form#apis) to see default apis.

## Installation
- install bootstrap3 styles. this package is roughly tested with bootstrap 3.3.6
- `npm install --save rf-bootstrap3`

## Components

### Wrapper

### Group

### Array

### Fields

#### Input
this is a general input field. all other props will be passed down to the inner input component.

#### Text
- value - string
- placeholder - string

#### Textarea
- value - string
- placeholder- string
- rows - number

#### Number
- value - number
- placeholder - string

#### Password
- value - string
- display - optional 'show' or 'hide'
- placeholder: - string

#### File
- value - object as {path}
- onChange - func(value, event), but value is an object as {path, file, files}

#### Date
- value - js Date
- display - 'utc' or 'local'. control how to display the value

#### DatetimeLocal
- value - js Date
- display - 'utc' or 'local'. control how to display the value

#### Checkbox
- value - bool

#### CheckboxGroup
- value - array of string
- items - object as {key: {label, readOnly, disabled}}, each key is for one item
- inline - bool. if true, display as inline style

#### RadioGroup
- value - string
- items - object as {key: {label, readOnly, disabled}}, each key is for one item
- inline - bool. if true, display as inline style

#### Select
- value - string
- items - object as {key: {label, readOnly, disabled}}, each key is for one item
- placeholder - bool. if true, display as inline style

#### MultipleSelect
- value - array of string
- items - object as {key: {label, readOnly, disabled}}, each key is for one item

## License
ISC