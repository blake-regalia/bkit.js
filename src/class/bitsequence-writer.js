
module.exports = class BitsequenceWriter {
	constructor(n_bits) {
		Object.assign(this, {
			_at_contents: new Uint8Array(Math.ceil(n_bits / 8)),
			_ib_index: 0,
			_xb_pending: 0x00,
			_i_bit: -1,
			_n_bits: n_bits,
		});
	}

	advance(n_bits) {
		let i_bit = n_bits + this._i_bit;
		let nb_move = i_bit >> 3;
		if(nb_move) {
			if(this._xb_pending) {
				this._at_contents[this._ib_index] = this._xb_pending;
				this._xb_pending = 0;
			}
			this._ib_index += nb_move;
		}

		let i_pos = this._i_bit = i_bit % 8;
		this._xb_pending |= 0x80 >>> i_pos;
	}

	close() {
		let at_contents = this._at_contents;
		if(this._ib_index > at_contents.length) throw new Error('bitsequence wrote out of range');
		at_contents[this._ib_index] = this._xb_pending;
		return at_contents;
	}

	// exportRRR(ni_block, ni_super) {
	// 	ni_block = BigInt(ni_block);
	// 	ni_super = BigInt(ni_super);

	// 	let ni_sequence = this._n_bits;

	// 	let n_classes = 1 << ni_block;
	// 	let a_popcounts = [];
	// 	{
	// 		for(let i=0; i<=n_classes; i++) {
	// 			a_popcounts.push(ATU8_EMPTY);
	// 		}
	// 	}

	// 	{
	// 		for(let x_value=0; x_value<n_classes; x_value++) {
	// 			let c_pop = popcount_uint32(x_value);
	// 			a_popcounts[c_pop].push();
	// 		}
	// 	}

	// 	for(let ii_block=0n; ii_block<ni_sequence; ii_block++) {
	// 		let x_block = 
	// 	}
	// }
};
