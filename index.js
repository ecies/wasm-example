import * as ecies from "ecies-wasm";
import * as ed25519 from "ecies-ed25519-wasm";

function check_secp256k1() {
  const [sk, pk] = ecies.generate_keypair();
  const data = Uint8Array.from([1, 2, 3, 4]);

  const encrypted = ecies.encrypt(pk, data);
  const decrypted = ecies.decrypt(sk, encrypted);
  alert("decrypted: " + decrypted);
}

function check_ed25519() {
  const data = Uint8Array.from([1, 2, 3, 4]);
  const [sk, pk] = ed25519.generate_keypair();

  const encrypted = ed25519.encrypt(pk, data);
  const decrypted = ed25519.decrypt(sk, encrypted);
  alert("ed25519 decrypted: " + decrypted);
}

check_secp256k1();
check_ed25519();

alert("call wasm encrypt decrypt ok");
