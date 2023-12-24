```sh
ffmpeg -hwaccel vulkan -i i.mp4 -s vga -b:v 1.5M -vf crop=320:240:0:0 o.mp4

```
