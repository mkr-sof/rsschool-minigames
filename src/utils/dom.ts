const HTML_ESCAPES: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
};

export function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (char) => HTML_ESCAPES[char]);
}

export function createElementFromHtml(html: string): HTMLElement {
  const template = document.createElement('template');
  template.innerHTML = html.trim();

  const element = template.content.firstElementChild;
  if (!(element instanceof HTMLElement)) {
    throw new Error('createElementFromHtml: markup must contain a root HTML element');
  }

  return element;
}
