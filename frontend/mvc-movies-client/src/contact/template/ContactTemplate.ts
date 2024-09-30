export default class ContactTemplate {
  public static create(): string {
    return `
      <div class="contact-form">
        <h2>Contáctenos</h2>
        <form>
          <div class="form-control">
            <label for="name">Nombre:</label>
            <input type="text" id="name" name="name" required>
          </div>

          <div class="form-control">
            <label for="email">Correo Electrónico:</label>
            <input type="email" id="email" name="email" required>
          </div>

          <div class="form-control">
            <label for="message">Mensaje:</label>
            <textarea id="message" name="message" required></textarea>
          </div>

          <div class="form-buttons">
            <button type="submit">Enviar</button>
          </div>
        </form>
      </div>
    `
  }
}