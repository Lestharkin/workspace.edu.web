# tmp

```javascript
this.root.appendChild(
  new ButtonComponent(
    'Aceptar',
    () => {
      alert('Button clicked')
    },
    ButtonType.primary,
  ).get(),
)
this.root.appendChild(
  new ButtonComponent(
    'Aceptar',
    () => {
      alert('OTRA ACCION')
    },
    ButtonType.danger,
  ).get(),
)

this.root.appendChild(
  new SuperButtonComponent(
    'Super Aceptar',
    () => {
      alert('Super ACCION')
    },
    () => {
      alert('Super Dblclick')
    },
    ButtonType.warning,
  ).get(),
)
```
