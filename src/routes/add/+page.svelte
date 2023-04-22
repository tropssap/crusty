<script lang="ts">
    import { addItem } from '../../lib/services/ItemAPI';
  
    let name = '';
    let description = '';
    let price = '';
    let imageUrl = '';
  
    async function handleSubmit() {
      const newItem = {
        name,
        description,
        price: parseFloat(price),
        imageUrl,
      };
  
      const itemId = await addItem(newItem);
      console.log('New item added with ID:', itemId);
    }
  </script>
  
  <div class="form-container">
    <form on:submit|preventDefault={handleSubmit}>
      <input type="text" bind:value={name} placeholder="Name" required />
      <input type="text" bind:value={description} placeholder="Description" required />
      <input type="number" step="0.01" bind:value={price} placeholder="Price" required />
      <input type="url" bind:value={imageUrl} placeholder="Image URL" required />
      <button type="submit" disabled={!name || !description || !price || !imageUrl}>
        Add Item
      </button>
    </form>
  </div>
  
  <style>
    .form-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 2rem;
      max-width: 600px;
      margin: 0 auto;
    }
  
    form {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
  
    input {
      font-size: 1rem;
      padding: 0.5rem;
      margin-bottom: 1rem;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
  
    button {
      font-size: 1rem;
      padding: 0.5rem 1rem;
      background-color: #007bff;
      border: none;
      border-radius: 4px;
      color: white;
      cursor: pointer;
    }
  
    button:hover {
      background-color: #0056b3;
    }
  
    button:disabled {
      background-color: #ccc;
      cursor: not-allowed;
    }
  </style>
  