# PROGRAM REGISTRASI DAN LOGIN SHA-256
# NIA RAHMADANI / 105841103724 / 4B

import hashlib

# UNTUK FUNGSI HASH SHA-256
def hashPassword(password):
    return hashlib.sha256(password.encode()).hexdigest()

savedUsername = ""
savedHashPassword = ""

# UNTUK REGISTRASI
def registrasi():
    global savedUsername, savedHashPassword

    print("\nREGISTRASI USER")

    username = input("Buat Username : ")
    password = input("Buat Password : ")

    # BUAT SIMPAN USERNAME
    savedUsername = username

    # UNTUK UBAH PASSWORD JADI HASH SHA-256
    savedHashPassword = hashPassword(password)

    print("\nRegistrasi berhasil!")
    print("Username :", savedUsername)

    # OUTPUT HASH PASSWORD
    print("Hash Password SHA-256 :")
    print(savedHashPassword)

    menu()

# BUAT LOGIN
def login():
    print("\nLOGIN USER")

    username = input("Masukkan Username : ")
    password = input("Masukkan Password : ")

    loginHash = hashPassword(password)

    if username == savedUsername and loginHash == savedHashPassword:

        print("\nStatus Login : BERHASIL")

    else:

        print("\nStatus Login : GAGAL")

    menu()

# BUAT MENU
def menu():
    print("\nMENU")
    print("1. Login")
    print("2. Keluar")

    pilihan = input("Pilih Menu : ")

    if pilihan == "1":

        login()

    elif pilihan == "2":

        print("\nProgram selesai...")

    else:

        print("\nPilihan tidak tersedia!")
        menu()

# BUAT JALANKAN PROGRAM
registrasi()