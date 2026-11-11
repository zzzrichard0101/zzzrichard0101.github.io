"""Encode actual Unreal captures for the project page and record provenance."""
import argparse
import hashlib
import json
from pathlib import Path

from PIL import Image

parser = argparse.ArgumentParser()
parser.add_argument("capture_dir", type=Path)
args = parser.parse_args()
output = Path(__file__).resolve().parents[1] / "public" / "images"
records = []
for environment in ("standard", "courtyard", "night"):
    source = args.capture_dir / f"unreal-vla-{environment}.png"
    destination = output / f"unreal-vla-{environment}.webp"
    with Image.open(source) as image:
        image.convert("RGB").save(destination, "WEBP", quality=86, method=6)
        size = image.size
    records.append({
        "file": destination.name,
        "source": "Unreal Engine FScreenshotRequest, actual local v12 inference",
        "environment": environment,
        "model": "rgb-language-v12-domain-augmentation",
        "size": list(size),
        "sourceSha256": hashlib.sha256(source.read_bytes()).hexdigest(),
        "processing": "WebP compression; no crop, overlays, or generated content",
    })
    print(f"{destination.name}: {destination.stat().st_size:,} bytes")
(output / "unreal-vla-provenance.json").write_text(
    json.dumps(records, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
)
