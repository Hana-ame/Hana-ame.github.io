# glibc

```sh
apt install bison

mkdir $HOME/glibc/ && cd $HOME/glibc
wget http://ftp.gnu.org/gnu/libc/glibc-2.40.tar.gz
tar -xvzf glibc-2.40.tar.gz
mkdir build 
mkdir glibc-2.40-install
cd build
~/glibc/glibc-2.40/configure --prefix=$HOME/glibc/glibc-2.40-install
make
make install
```