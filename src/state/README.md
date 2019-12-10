# State

## Naming convention

An export must have a naming with the format : \[ **namespace** \]\[ **type** \]\[ **description** \]

### Motivation

The idea behind this naming convention is to have the imports sorted alphabetically for a better visibility and to avoid name clash.

### Namespace

The name of the model targeted by the exported item.

### Type

The type of logic implemented in the exported item :

- **Action** : create an **action** ready for **dispatch**.
- **Thunk** : is a **thunk** or create a **thunk** with parameters to **dispatch** successive **actions**.
- **Do** : modify the given **model**, used as **handlers** for the **reducers**.
- **Selector** : take the **application state** and return data linked to the **model**.

### Description

A succinct description of the effect of the item.

### Examples

```typescript
// create an action starting the exercice
export function exerciceActionStart(exercice: Exercice): Action { ... };

// take the state and return all exercices of type workout with a state 'TODO'
export function exerciceWorkoutSelectorTodo(state: State): ExerciceWorkout[] { ... };
```
