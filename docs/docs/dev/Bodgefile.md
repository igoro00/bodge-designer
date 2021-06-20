---
sidebar_position: 1
---

# Bodgefile

Bodgefile to plik bedący w root'cie folderu otwartego przez użytkownika. Jest on w formacie json i określa całą strukturę UI aplikacji.

## Komponenty

Głównym założeniem designu są komponenty. To jest przykładowy komponent:

```json
{
    "id": 0,
    "type": "Window",
    "properties": {
        "minimumSize": {
            "width": "800px",
            "height": "600px"
        },
        "size": {
            "width": "1280px",
            "height": "720px"
        },
        "title": "Hello World"
    },
    "children": []
}
```

| Nazwa właściwości | Typ | Opis |
| --- | --- | --- |
| id | int | globalbe id obiektu. Identyfikuje komponent np. podczas podpinania funkcji | 
| type | string | Predefiniowane typy komponentów. Są tłumaczone do natywnych komponentów GTK i Qt. Zapisane w PascalCase. |
| properties | object | W zależności od typu obiektu, komponent, może mieć różne właściwości. Najczęściej są to wybrane właściwości podobne do css. Więcej o właściwościach dla poszczególnych typów komponentów dowiesz się tutaj. | 
| children | Array<object\> | Tablica komponentów, które mają znajdować się w środku tego komponentu. Chociaż nie wszystkie komponenty obsługują children, każdy komponent musi mieć tablicę children(jeśli komponent nie obsługuje dzieci to tabela ma być pusta). |

## Przykładowy program hello world

```json
{
  "windows": [
    {
      "id": 0,
      "type": "Window",
      "properties": {
        "minimumSize": {
          "width": "800px",
          "height": "600px"
        },
        "size": {
          "width": "1280px",
          "height": "720px"
        },
        "title": "Hello World"
      },
      "children": [
        {
          "id": 1,
          "type": "Center",
          "properties": {
            "size": {
              "width": "100%",
              "height": "100%"
            }
          },
          "children": [
            {
              "id": 2,
              "type": "VStack",
              "properties": {
                "size": {
                  "width": "400px",
                  "height": "400px"
                },
                "align": "center",
                "gap": "30px"
              },
              "children": [
                {
                  "id": 3,
                  "type": "Header",
                  "propeties": {
                    "text": "Hello World 👋"
                  }
                },
                {
                  "id": 4,
                  "type": "Text",
                  "propeties": {
                    "text": "👇 You can click on any of these two buttons! `👇"
                  }
                },
                {
                  "id": 5,
                  "type": "HStack",
                  "properties": {
                    "width": "100%",
                    "justify": "space-between"
                  },
                  "children": [
                    {
                      "id": 6,
                      "type": "Button",
                      "properties": {
                        "text": "Read the docs"
                      }
                    },
                    {
                      "id": 7,
                      "type": "Button",
                      "properties": {
                        "text": "Exit"
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}
```