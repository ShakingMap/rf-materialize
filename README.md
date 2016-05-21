# RF Materialize
[rf-form](https://github.com/ShakingMap/rf-form) components suit for materialize.

This docs list the components of this suit. refer to [rf-form](https://github.com/ShakingMap/rf-form#apis) to see default apis.

## Installation
- install materialize styles. this package is roughly tested with materialize 0.97.6
- `npm install --save rf-materialize`

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
- enablePreview - bool, if true, a preview of the selected image will be shown
- previewStyle - object, inline-style for the preview, default to {maxWidth: '100%', maxHeight: '200px'}

#### Date
- value - js Date
- display - 'utc' or 'local'. control how to display the value

#### DatetimeLocal
- value - js Date
- display - 'utc' or 'local'. control how to display the value

#### Checkbox
- value - bool
- label - string

#### CheckboxGroup
- value - array of string
- items - object as {key: {label, readOnly, disabled}}, each key is for one item
- inline - bool. if true, display as inline style

#### RadioGroup
- value - string
- items - object as {key: {label, readOnly, disabled}}, each key is for one item
- inline - bool. if true, display as inline style

#### Select
NOT IMPLEMENTED

#### MultipleSelect
NOT IMPLEMENTED

## License
ISC