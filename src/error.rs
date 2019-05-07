//! Errors that may be output by this library.

use scuttlebutt::Block;
use std::fmt::{self, Display, Formatter};

/// Errors that may occur when using the `Fancy` trait. These errors are
/// API-usage errors, such as trying to add two `Items` with different moduli.
#[derive(Debug)]
pub enum FancyError {
    /// Unequal moduli.
    UnequalModuli,
    /// Invalid argument.
    InvalidArg(String),
    /// Invalid number of arguments.
    InvalidArgNum {
        /// Received number of arguments.
        got: usize,
        /// Expected number of arguments.
        needed: usize,
    },
    /// Invalid argument modulus.
    InvalidArgMod {
        /// Received modulus.
        got: u16,
        /// Expected modulus.
        needed: u16,
    },
    /// Expected binary argument.
    ArgNotBinary,
    /// Truth table expected but none given.
    NoTruthTable,
    /// Projection truth table is invalid.
    InvalidTruthTable,
    /// Uninitialized value encountered.
    UninitializedValue,
}

/// Errors from the dummy fancy object.
#[derive(Debug)]
pub enum DummyError {
    /// Not enough garbler inputs provided.
    NotEnoughGarblerInputs,
    /// Not enough evaluator inputs provided.
    NotEnoughEvaluatorInputs,
    /// A fancy error has occurred.
    FancyError(FancyError),
}

/// Errors from the evaluator.
#[derive(Debug)]
pub enum EvaluatorError {
    /// Not enough garbler inputs provided.
    NotEnoughGarblerInputs,
    /// Not enough evaluator inputs provided.
    NotEnoughEvaluatorInputs,
    /// Decoding failed.
    DecodingFailed,
    /// A communication error has occurred.
    CommunicationError(String),
    /// A fancy error has occurred.
    FancyError(FancyError),
}

/// Errors from the garbler.
#[derive(Debug)]
pub enum GarblerError {
    /// An error occurred while processing a message.
    CommunicationError(String),
    /// Asymmetric moduli error.
    AsymmetricHalfGateModuliMax8(u16),
    /// A truth table was missing.
    TruthTableRequired,
    /// Delta required for wire reuse.
    DeltaRequired,
    /// A fancy error has occurred.
    FancyError(FancyError),
}

/// Errors emitted when building a circuit.
#[derive(Debug)]
pub enum CircuitBuilderError {
    /// Reuse not supported.
    ReuseUndefined,
    /// A fancy error has occurred.
    FancyError(FancyError),
}

/// Errors emitted when running the informer.
#[derive(Debug)]
pub enum InformerError {
    /// A fancy error has occurred.
    FancyError(FancyError),
}

////////////////////////////////////////////////////////////////////////////////
// fancy error

impl Display for FancyError {
    fn fmt(&self, f: &mut Formatter) -> fmt::Result {
        match self {
            FancyError::UnequalModuli => "unequal moduli".fmt(f),
            FancyError::InvalidArg(s) => write!(f, "invalid argument: {}", s),
            FancyError::InvalidArgNum { got, needed } => write!(
                f,
                "invalid number of arguments: needed {} but got {}",
                got, needed
            ),
            FancyError::InvalidArgMod { got, needed } => write!(
                f,
                "invalid modulus: got mod {} but require mod {}",
                got, needed
            ),
            FancyError::ArgNotBinary => "argument bundle must be boolean".fmt(f),
            FancyError::NoTruthTable => "truth table required".fmt(f),
            FancyError::InvalidTruthTable => "invalid truth table".fmt(f),
            FancyError::UninitializedValue => {
                "uninitialized value in circuit. is the circuit topologically sorted?".fmt(f)
            }
        }
    }
}

////////////////////////////////////////////////////////////////////////////////
// Dummy error

impl Display for DummyError {
    fn fmt(&self, f: &mut Formatter) -> fmt::Result {
        match self {
            DummyError::NotEnoughGarblerInputs => "not enough garbler inputs".fmt(f),
            DummyError::NotEnoughEvaluatorInputs => "not enough evaluator inputs".fmt(f),
            DummyError::FancyError(e) => write!(f, "fancy error: {}", e),
        }
    }
}

impl From<FancyError> for DummyError {
    fn from(e: FancyError) -> DummyError {
        DummyError::FancyError(e)
    }
}

////////////////////////////////////////////////////////////////////////////////
// Evaluator error

impl Display for EvaluatorError {
    fn fmt(&self, f: &mut Formatter) -> fmt::Result {
        match self {
            EvaluatorError::NotEnoughGarblerInputs => "not enough garbler inputs".fmt(f),
            EvaluatorError::NotEnoughEvaluatorInputs => "not enough evaluator inputs".fmt(f),
            EvaluatorError::DecodingFailed => write!(f, "decodiing failed"),
            EvaluatorError::CommunicationError(s) => write!(f, "communication error: {}", s),
            EvaluatorError::FancyError(e) => write!(f, "fancy error: {}", e),
        }
    }
}

impl From<FancyError> for EvaluatorError {
    fn from(e: FancyError) -> Self {
        EvaluatorError::FancyError(e)
    }
}

impl From<std::io::Error> for EvaluatorError {
    fn from(e: std::io::Error) -> Self {
        EvaluatorError::CommunicationError(e.to_string())
    }
}

impl From<std::sync::mpsc::RecvError> for EvaluatorError {
    fn from(e: std::sync::mpsc::RecvError) -> Self {
        EvaluatorError::CommunicationError(e.to_string())
    }
}

////////////////////////////////////////////////////////////////////////////////
// Garbler error

impl Display for GarblerError {
    fn fmt(&self, f: &mut Formatter) -> fmt::Result {
        match self {
            GarblerError::CommunicationError(s) => write!(f, "{}", s),
            GarblerError::AsymmetricHalfGateModuliMax8(q) => write!(
                f,
                "the small modulus in a half gate with asymmetric moduli is capped at 8, got {}",
                q
            ),
            GarblerError::TruthTableRequired => {
                "truth table required for garbler projection gates".fmt(f)
            }
            GarblerError::DeltaRequired => {
                "delta from previous execution of garbler must be provided with wire to reuse"
                    .fmt(f)
            }
            GarblerError::FancyError(e) => write!(f, "{}", e),
        }
    }
}

impl From<FancyError> for GarblerError {
    fn from(e: FancyError) -> Self {
        GarblerError::FancyError(e)
    }
}

impl From<std::io::Error> for GarblerError {
    fn from(e: std::io::Error) -> Self {
        GarblerError::CommunicationError(e.to_string())
    }
}

impl From<std::sync::mpsc::SendError<Vec<Block>>> for GarblerError {
    fn from(e: std::sync::mpsc::SendError<Vec<Block>>) -> Self {
        GarblerError::CommunicationError(e.to_string())
    }
}

////////////////////////////////////////////////////////////////////////////////
// circuit builder error

impl Display for CircuitBuilderError {
    fn fmt(&self, f: &mut Formatter) -> fmt::Result {
        match self {
            CircuitBuilderError::FancyError(e) => write!(f, "fancy error: {}", e),
            CircuitBuilderError::ReuseUndefined => write!(
                f,
                "reuse is undefined for circuits. it is unclear what it means to reuse a
                CircuitRef from a previous circuit."
            ),
        }
    }
}

impl From<FancyError> for CircuitBuilderError {
    fn from(e: FancyError) -> Self {
        CircuitBuilderError::FancyError(e)
    }
}

////////////////////////////////////////////////////////////////////////////////
// informer error

impl Display for InformerError {
    fn fmt(&self, f: &mut Formatter) -> fmt::Result {
        match self {
            InformerError::FancyError(e) => write!(f, "fancy error: {}", e),
        }
    }
}

impl From<FancyError> for InformerError {
    fn from(e: FancyError) -> InformerError {
        InformerError::FancyError(e)
    }
}

/// Errors emitted by the circuit parser.
#[derive(Debug)]
pub enum CircuitParserError {
    /// An I/O error occurred.
    IoError(std::io::Error),
    /// A regular expression parsing error occurred.
    RegexError(regex::Error),
    /// An error occurred parsing an integer.
    ParseIntError,
    /// An error occurred parsing a line.
    ParseLineError(String),
    /// An error occurred parsing a gate type.
    ParseGateError(String),
}

impl Display for CircuitParserError {
    fn fmt(&self, f: &mut Formatter) -> fmt::Result {
        match self {
            CircuitParserError::IoError(e) => write!(f, "io error: {}", e),
            CircuitParserError::RegexError(e) => write!(f, "regex error: {}", e),
            CircuitParserError::ParseIntError => write!(f, "unable to parse integer"),
            CircuitParserError::ParseLineError(s) => write!(f, "unable to parse line '{}'", s),
            CircuitParserError::ParseGateError(s) => write!(f, "unable to parse gate '{}'", s),
        }
    }
}

impl From<std::io::Error> for CircuitParserError {
    fn from(e: std::io::Error) -> CircuitParserError {
        CircuitParserError::IoError(e)
    }
}

impl From<regex::Error> for CircuitParserError {
    fn from(e: regex::Error) -> CircuitParserError {
        CircuitParserError::RegexError(e)
    }
}

impl From<std::num::ParseIntError> for CircuitParserError {
    fn from(_: std::num::ParseIntError) -> CircuitParserError {
        CircuitParserError::ParseIntError
    }
}
