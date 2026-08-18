import { useState } from 'react';

export default function CopyText({ label, text }: { label: string; text: string }) {
  const [status, setStatus] = useState('');

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setStatus('已复制');
    } catch {
      setStatus('请手动选择文字复制');
    }
  }

  return (
    <div className="copy-block">
      <div className="copy-toolbar">
        <span>{label}</span>
        <button type="button" onClick={copy}>复制</button>
      </div>
      <p>{text}</p>
      <span className="copy-status" role="status" aria-live="polite">{status}</span>
    </div>
  );
}
