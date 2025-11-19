
---

# 🧰 Mini UI Builder – Manual de utilizare

Un proiect React simplu și modular pentru construirea de interfețe vizuale prin blocuri predefinite. Ideal pentru copii, educatori sau oricine învață programare vizuală.

---

## 📁 Structura fișierelor

```
src/
├── components/
│   ├── BlockPalette.js   # Selectorul de blocuri
│   ├── Canvas.js         # Zona de construcție
│   └── Block.js          # Bloc individual
├── App.js                # Logica principală
├── App.css               # Stilizare generală
```

---

## 🧱 BlockPalette.js – Blocuri predefinite

Componentă care oferă utilizatorului o paletă de blocuri ce pot fi adăugate în canvas.

```js
const blocks = [
  { type: 'title', label: 'Titlu Mare', content: 'Bine ai venit!' },
  { type: 'image', label: 'Imagine', content: 'https://placekitten.com/200/150' },
  { type: 'text', label: 'Text', content: 'Acesta este un text simplu.' },
  { type: 'button', label: 'Buton', content: 'Apasă-mă!' }
];
```

🔘 Fiecare buton din paletă adaugă un bloc în canvas prin `onAdd`.

---

## 🖼️ Canvas.js – Zona de construcție

Componentă care afișează blocurile adăugate de utilizator.

```js
<Canvas blocks={blocks} onRemove={handleRemoveBlock} />
```

🧹 Fiecare bloc poate fi eliminat individual printr-un buton ❌.

---

## 🧩 Block.js – Bloc individual

Componentă care redă un bloc în funcție de tipul său (`title`, `image`, `text`, `button`).

```js
{block.type === 'title' && <h1>{block.content}</h1>}
{block.type === 'image' && <img src={block.content} alt="bloc vizual" />}
{block.type === 'text' && <p>{block.content}</p>}
{block.type === 'button' && <button>{block.content}</button>}
```

---

## 🧠 App.js – Logica principală

- Gestionează starea aplicației (`blocks`)
- Adaugă blocuri cu ID unic (`uuidv4`)
- Elimină blocuri după ID

```js
const handleAddBlock = (block) => {
  setBlocks([...blocks, { ...block, id: uuidv4() }]);
};
```

---

## 🎨 App.css – Stilizare

```css
.App {
  font-family: 'Comic Neue', sans-serif;
  background: #fef6e4;
}

.palette button {
  background: #ffb703;
  border-radius: 8px;
}

.canvas {
  border: 2px dashed #8ecae6;
  background: #ffffff;
}

.block img {
  max-width: 100%;
  border-radius: 8px;
}

.remove {
  position: absolute;
  top: 0;
  right: 0;
  background: #e63946;
  color: white;
}
```

---

## 🚀 Cum rulezi aplicația

1. Clonează proiectul:
   ```bash
   git clone <repo-url>
   cd mini-ui-builder
   ```

2. Instalează dependențele:
   ```bash
   npm install
   ```

3. Rulează aplicația:
   ```bash
   npm start
   ```

---

## 🛠️ Idei de extindere

- ✏️ Editare conținut în blocuri (ex: dublu-click pentru modificare)
- 🧲 Drag-and-drop pentru reordonare
- 💾 Salvare automată în `localStorage`
- 🎨 Personalizare stil per bloc (culori, fonturi)

---

