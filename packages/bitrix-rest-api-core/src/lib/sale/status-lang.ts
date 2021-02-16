export interface StatusLang {
  /**
   * Description.
   * Example: "Отгружен"
   */
  description?: string;

  /**
   * Language ID.
   * Example: "ru", "en"
   */
  lid: string;

  /**
   * Status name.
   * Example: "Отгружен"
   */
  name: string;

  /**
   * Status ID.
   * Example: "DF"
   */
  statusId: string;
}
