<?php
/**
 * Template part used for displaying page content in page.php
 *
 * @package Tiny_Framework
 * @since Tiny Framework 1.0
 */
?>

	<?php tha_entry_before(); // custom action hook ?>

	<article id="post-<?php the_ID(); ?>" <?php post_class(); ?> itemscope itemtype="http://schema.org/Article">

		<?php tha_entry_top(); // custom action hook ?>

		<!--
			https://github.com/mr-bobz/talarts/issues/69
			The header tag <h> need to be in order #69
			We are not displaying entry-header, since it is already part of breadcrumb
		-->				
		<header class="entry-header">
			<?php the_title( '<h1 class="entry-title" id="header-h1" itemprop="headline">', '</h1>' ); ?>
		</header> 


		<div class="entry-content" itemprop="articleBody">

			<?php the_content(); ?>

			<?php tinyframework_post_pages_nav(); // Function located in: inc/template-tags.php ?>

		</div><!-- .entry-content -->

		<footer class="entry-meta">

			<?php tinyframework_edit_link(); // Function located in: inc/template-tags.php ?>

		</footer><!-- .entry-meta -->

		<?php tha_entry_bottom(); // custom action hook ?>

	</article><!-- #post -->

	<?php tha_entry_after(); // custom action hook ?>
