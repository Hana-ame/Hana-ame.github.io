# ffmpeg

```sh
ffmpeg -hwaccel vulkan -i i.mp4 -s vga -b:v 1.5M -vf crop=320:240:0:0 o.mp4

```

## input

before `-i [filename]` 

## output

before output `[filename]`

### -b

bitrate

:v, :a

usage:
`-b 25M`
`-b:v 25M`

### -c

decoder 

:v, :a

usage:
`-c:v h264_qsv`

more: 

