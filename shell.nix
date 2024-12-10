{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  buildInputs = [
    pkgs.pnpm
    pkgs.biome

    # keep this line if you use bash
    pkgs.bashInteractive
  ];
}
