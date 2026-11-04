#!/bin/bash
# GPverse OnAir — avvio locale su http://127.0.0.1:8765
cd "$(dirname "$0")"
if ! curl -s -o /dev/null http://127.0.0.1:8765/index.html; then
  python3 -m http.server 8765 --bind 127.0.0.1 >/dev/null 2>&1 &
  sleep 1
fi
xdg-open http://127.0.0.1:8765/index.html >/dev/null 2>&1 &
