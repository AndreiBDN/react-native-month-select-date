# React Native Month With Selected Date 📆


## Installation

```console
npm install react-native-month-selected-date --save
```

Using yarn

```console
yarn add react-native-month-selected-date
```

## Usage

## API

| Prop                    | Description                            | Required?              | Default | Type             |
| ----------------------- | -------------------------------------- | ---------------------- | ------- | ---------------- |
| **`onPress`**           | Callback called when a day is pressed. | yes                    |         | Function         |
| **`minDate`**           | Minimum date that can be selected.     | no                     | null    | Date             |
| **`maxDate`**           | Maximum date that can be selected.     | no                     | null    | Date             |
| **`startDate`**         | Selected start date                    | no                     | null    | Date             |
| **`endDate`**           | Selected end date                      | requires _startDate_   | null    | Date             |
| **`theme`**             | Calendar StyleSheet                    | no                     | null    | Object           |
| **`locale`**            | Calendar language                      | es, en, fr, br, zh, ru | 'en'    | LocaleType       |
| **`showWeekdays`**      | Show Week columns                      | no                     | true    | boolean          |
| **`firstDayMonday`**    | Monday as first day of the week        | no                     | false   | boolean          |
| **`monthHeight`**       | Change Month row height                | no                     | 370     | number           |
| **`disabledDays`**      | Disabled days                          | no                     | null    | {[string]: any } |
| **`renderDayContent`**  | Render custom Day content              | no                     | null    | Function         |
| **`disableOffsetDays`** | Remove offset Days.                    | no                     | false   | boolean          |

## License

MIT
