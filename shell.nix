let
  nixpkgs = fetchTarball "https://github.com/NixOS/nixpkgs/tarball/nixos-24.11";
  pkgs = import nixpkgs {
    config = { };
    overlays = [ ];
  };
in

pkgs.mkShell {
  buildInputs = [
    pkgs.pnpm
    pkgs.biome

    # keep this line if you use bash
    pkgs.bashInteractive
  ];
}
