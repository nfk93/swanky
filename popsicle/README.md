# `popsicle`: A rust library for private set intersection

`popsicle` is a rust library that provides implementations for private
set intersection (PSI) protocols.

`popsicle` currently implements the following PSI protocols:

* The Pinkas-Schneider-Zohner semi-honest two-party PSI protocol based on the
  oblivious PRF of Kolesnikov-Kumaresan-Rosulek-Trieu.
* [Unstable] The Pinkas-Schnedier-Tkachenko-Yanai semi-honest two-party PSI
  protocol based on the oblivious programmable PRF of
  Kolesnikov-Matania-Pinkas-Rosulek-Trieu.
* [Unstable] The Kolesnikov-Matania-Pinkas-Rosulek-Trieu semi-honest multi-party
  PSI protocol.

**`popsicle` should be considered unstable and under active development until
version 1.0 is released**

# Documentation

The documentation can be found here: <https://galoisinc.github.io/popsicle/popsicle/>

# Building

Use `cargo build` to build, `cargo test` to run the test suite, and `cargo
bench` to benchmark the various protocols.

`popsicle` also supports the following features:

* `nightly`: Use nightly features from `rust` and the underlying libraries.
* `unstable`: Enable unstable components of `popsicle`.

# License

MIT License

# Authors

- Alex J. Malozemoff <amaloz@galois.com>
- Brent Carmer <bcarmer@galois.com>

# Acknowledgments

This material is based upon work supported by the ARO and DARPA under Contract
No. W911NF-15-C-0227.

Any opinions, findings and conclusions or recommendations expressed in this
material are those of the author(s) and do not necessarily reflect the views of
the ARO and DARPA.

Copyright © 2019 Galois, Inc.