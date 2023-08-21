<?php
/**
 * Plugin Name:       Fanatic Blocks
 * Description:       Custom blocks plugin for FanaticDevs
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            FamaticDevs
 *
 * @package           fanatic-blocks
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */






function create_block_starter_block_block_init() {
	register_block_type( __DIR__ . '/build/about-section' );
	register_block_type( __DIR__ . '/build/home-hero' );
	register_block_type( __DIR__ . '/build/services-boxes' );
}
add_action( 'init', 'create_block_starter_block_block_init' );
